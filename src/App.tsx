import React from 'react';
import s from './App.module.css';
import './App.css';
import dungeon from './assets/img/dungeon.jpg';
import classNames from "classnames";
import SmoothScroll from "./SmoothScroll";


function App() {

  return (
    <SmoothScroll>
      <header className={s.mainHeader}>
        <div className={s.layers}>
          <div className={s.layersHeader}>
            <div className={s.layersCaption}>Шаблон с паралаксом</div>
            <div className={s.layersTitle}>Чудный лес</div>
          </div>
          <div className={classNames(s.layer, s.layersBase)}></div>
          <div className={classNames(s.layer, s.layersMiddle)}></div>
          <div className={classNames(s.layer, s.layersFront)}></div>
        </div>
      </header>
      <article className={s.mainArticle} style={{backgroundImage: "url(" + dungeon + ")"}}>
        <div className={s.mainArticleContent}>
          <h2 className={s.mainArticleHeader}>Для своих проектов</h2>
          <p className={s.paragraph}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto quo, vel! Eum, fuga
            hic mollitia odio
            officiis possimus quam! Aliquid beatae cum deleniti enim esse fugiat incidunt inventore necessitatibus
            reprehenderit voluptates. Ducimus.
          </p>
        </div>
        <div className={s.copy}>© Angor78</div>

      </article>

    </SmoothScroll>
  )
}

export default App;
