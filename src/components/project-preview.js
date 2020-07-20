import React from  "react";
import { Link } from "gatsby";
import Image from "gatsby-image";

const ProjectPreview = ({ slug, imageData, title, description }) => (
    <div className="project-preview">
        <Link to={`/work/${slug}/`}>
            <Image fluid={imageData} alt={title} />
        </Link>
        <h2>
            <Link to={`/work/${slug}/`}>
                {title}
            </Link>
        </h2>
        <p>{ description }</p>
        <Link to={`/work/${slug}/`}>
            View this project
        </Link>
    </div>
);

export default ProjectPreview;