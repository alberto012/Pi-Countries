import React from "react";
import { useSelector } from "react-redux";
import s from "./Allcard.module.css";
import { NavLink } from "react-router-dom";
import Card from "./Card";

export default function AllCard({ currentPage }) {
  const eCountry = useSelector((state) => state.countries);
  let expression = /^(https?:\/\/)?([\da-z.-]+)\.([a-z.]{2,6})([/\w .-]*)*\/?$/;
  var image =
    expression.test(eCountry.background_image) === false ||
    eCountry.flags === ""
      ? "https://38.media.tumblr.com/87557f6cfdb8997d55435b26f6d16a5c/tumblr_naxk2obyGN1t3m3ico1_500.gif"
      : eCountry.flags;

  return (
    <>
      <div className={s.allcard}>
        {currentPage.length ? (
          currentPage?.map((e) => {
            return (
              <div key={e.id}>
                <NavLink
                  style={{ textDecoration: "none" }}
                  to={`/details/${e.id}`}
                  key={e.id}
                >
                  <div>
                    <Card
                      currentPage={currentPage}
                      name={e.name}
                      flags={
                        e.flags ? e.flags : image
                      }
                      continent={e.continent}
                      
                    />
                    
                  </div>
                </NavLink>
              </div>
            );
          })
        ) : (
          <div className={s.loading}>
            <div className={s.item}></div>
            <div className={s.item}></div>
            <div className={s.item}></div>
            <div className={s.item}></div>
          </div>
        )}
      </div>
    </>
  );
}
