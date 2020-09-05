import React from "react"
import shodipoayomide from "../../assets/img/speakers/shodipoayomide.JPG"

const speakers = [
  {
    name: "Cassidy Williams",
    bio: "Principal Developer Experience Engineer, Netlify",
    imageURL:
      "https://pbs.twimg.com/profile_images/1292888896938729473/tDmJ1K6m_400x400.jpg",
    links: {
      github: "https://github.com/cassidoo",
      twitter: "https://twitter.com/cassidoo",
      linkedin: "https://www.linkedin.com/in/cassidoo",
    },
  },
  {
    name: "Kent C. Dodds",
    bio: "Technical Trainer",
    imageURL:
      "https://pbs.twimg.com/profile_images/759557613445001216/6M2E1l4q.jpg",
    links: {
      github: "https://github.com/kentcdodds",
      twitter: "https://twitter.com/kentcdodds",
      linkedin: "https://www.linkedin.com/in/kentcdodds",
    },
  },
  {
    name: "Max Stoiber",
    bio: "Staff Software Engineer, Gatsby",
    imageURL:
      "https://media.graphcms.com/output=format:jpg/resize=fit:crop,height:500,width:500/2jqu4t6TSlKDcqRFP6zT",
    links: {
      github: "https://github.com/mxstbr",
      twitter: "https://twitter.com/mxstbr",
      linkedin: "https://www.linkedin.com/in/mxstbr",
    },
  },
  {
    name: "Christian Nwamba",
    bio: "Senior Cloud Developer Advocate, Microsoft",
    imageURL:
      "https://pbs.twimg.com/profile_images/1105185322084847623/EPx48HPQ_400x400.jpg",
    links: {
      github: "https://github.com/christiannwamba",
      twitter: "https://twitter.com/codebeast",
      linkedin:
        "https://www.linkedin.com/in/christian-nwamba-032b04b2/?originalSubdomain=ng",
    },
  },
  {
    name: "Shodipo Ayomide",
    bio: "Founder, unStack Africa & Senior Developer Advocate",
    imageURL: shodipoayomide,
    links: {
      github: "https://github.com/developerayo",
      twitter: "https://twitter.com/developerayo",
      linkedin: "https://linkedin.com/in/shodipo-ayomide",
    },
  },
  {
    name: "Kingdom Orjiewuru",
    bio: "Co-Founder unStack Africa & Software Engineer, Aula",
    imageURL:
      "https://avatars2.githubusercontent.com/u/26261917?s=400&u=6a307e226cd2aef7f38968644047a8e80e336a4f&v=4",
    links: {
      github: "https://github.com/kingisaac95",
      twitter: "https://twitter.com/kingisaac95?lang=en",
      linkedin: "https://ng.linkedin.com/in/kingdomorjiewuru",
    },
  },
]

const Speakers = () => {
  return (
    <section id="speakers" className="speakers pt-60 brd-bottom">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 mb-50 text-center">
            <h1 className="title">Speakers</h1>
          </div>
        </div>
      </div>

      <div className="block-content row">
        <div className="col-sm-3 pd-0">
          <div className="block-speaker">
            <div className="block-img overlay soft">
              <div className="background-img">
                <img
                  loading="lazy"
                  src="https://cdn.vox-cdn.com/thumbor/IDuU1a0FYBrTb_X0tt5gCyTeALU=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/10164247/BlackPanther596d2f04d1540_2040.jpg"
                  alt=""
                />
              </div>
              <div className="block-info-2">
                <p>
                  <strong>Coming Soon</strong>
                  <span>WAKANDA FOREVER </span>
                </p>
                <ul className="block-social">
                  <li>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-github"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </li>
                  <li>
                    <a href="/" target="_blank" rel="noopener noreferrer">
                      <i className="fa fa-linkedin"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        {/* {speakers.map(({ name, imageURL, bio, links }) => {
          return (
            <div className="col-sm-3 pd-0" key={name}>
              <div className="block-speaker">
                <div className="block-img overlay soft">
                  <div className="background-img">
                    <img loading="lazy" src={imageURL} alt="" />
                  </div>
                  <div className="block-info-2">
                    <p>
                      <strong>{name}</strong>
                      <span>{bio}</span>
                    </p>
                    <ul className="block-social">
                      {Object.keys(links).map((linkKey) => {
                        const link = links[linkKey]

                        return (
                          <li key={linkKey}>
                            <a
                              href={link}
                              target="_blank"
                              rel="noopener noreferrer"
                            >
                              <i className={`fa fa-${linkKey}`}></i>
                            </a>
                          </li>
                        )
                      })}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          )
        })} */}
      </div>
    </section>
  )
}

export default Speakers
