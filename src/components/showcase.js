import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

const Bio = () => {
  return (
    <React.Fragment>
      <div className="showcase" style={{ display: 'flex', alignItems: 'center', flexDirection: 'column', marginBottom: '20px' }}>
      <StaticImage
        className="showcase-avatar"
        layout="fixed"
        formats={["auto", "webp", "avif"]}
        src="../images/profile-pic.jpg"
        quality={95}
        alt="Profile picture"
        style={{ 
          borderRadius: '50%', 
          width: '100%', // Use 100% of the container width
          height: 'auto', // Auto-adjust the height to maintain aspect ratio
          maxWidth: '250px', // Max width to prevent the image from being too large
          aspectRatio: '1 / 1' // Ensure the aspect ratio is 1:1 for a circle
        }}
      />


        <div style={{ maxWidth: '600px', textAlign: 'justify' }}>
        <br></br>

          <p>
          An economics master's graduate excelling in business analysis and data-driven financial strategies through a robust application of economic principles.      
          </p>
        </div>
      </div>

      <div className="flex" style={{ display: 'flex', justifyContent: 'center', gap: '10px' }}>
        <a className="button pseudo" target="_blank" href="mailto:jafarzadeh.farshad@outlook.com">
          <i className="fa fa-envelope fa-2x" aria-hidden="true"></i>
        </a>
        <a className="button pseudo" target="_blank" href="https://www.researchgate.net/profile/Farshad_Jafarzadeh">
          <i className="fab fa-researchgate fa-2x" aria-hidden="true"></i>
        </a>
        <a className="button pseudo" target="_blank" href="https://www.linkedin.com/in/farshadj">
          <i className="fab fa-linkedin-in fa-2x" aria-hidden="true"></i>
        </a>
        <a className="button pseudo" target="_blank" href="https://scholar.google.com/citations?hl=en&user=rd7Cdq0AAAAJ">
          <i className="ai ai-google-scholar-square ai-2x" aria-hidden="true"></i>
        </a>
      </div>
    </React.Fragment>
  )
}

export default Bio
