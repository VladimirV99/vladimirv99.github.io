"use client";

import { useState } from "react";

import type { Project } from "@/types";
import ProjectLink from "./ProjectLink";
import Slideshow from "./Slideshow";

import styles from "@/styles/Project.module.scss";

function ProjectView({ name, description, tags, url, slides }: Project) {
  const [showDropdown, setShowDropdown] = useState(false);
  const drawerClass = styles.drawer + " " + (showDropdown ? styles.active : "");

  return (
    <article className={styles.panel}>
      <div className={styles.panelMain}>
        <h3 className={styles.panelTitle}>{name}</h3>
        {description && <p className="justify">{description}</p>}
        {tags && (
          <ul className={styles.tags}>
            {tags.map((tag, i) => {
              return <li key={i}>{tag}</li>;
            })}
          </ul>
        )}
        {url && <ProjectLink>{url}</ProjectLink>}
      </div>

      {slides && (
        <div className={styles.panelExtra}>
          <div className={drawerClass}>
            <Slideshow slides={slides}></Slideshow>
          </div>

          {showDropdown ? (
            <div
              className={styles.accordion}
              onClick={() => setShowDropdown(false)}
            >
              Show less
            </div>
          ) : (
            <div
              className={styles.accordion}
              onClick={() => setShowDropdown(true)}
            >
              Show more
            </div>
          )}
        </div>
      )}
    </article>
  );
}

export default ProjectView;
