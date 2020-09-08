import React from "react"
// import shodipoayomide from "../../assets/img/speakers/shodipoayomide.JPG"

const speakers = [
  {
    name: "Prosper Otemuyiwa",
    bio: "Co-Founder & CTO, Eden Life",
    imageURL:
      "https://miro.medium.com/max/500/1*tv9pIQPhwumDnYBfCoapYg.jpeg",
    links: {
      github: "https://github.com/unicodeveloper",
      twitter: "https://twitter.com/unicodeveloper",
      linkedin: "https://ng.linkedin.com/in/prosperotemuyiwa",
    },
  },
  {
    name: "James Q. Quick",
    bio: "Senior Developer Advocacte, Auth0",
    imageURL:
      "https://yt3.ggpht.com/a/AATXAJw6goL85GOINrpbAgISieyTKQWx0d8mVLY4Eanb6g=s900-c-k-c0xffffffff-no-rj-mo",
    links: {
      github: "https://github.com/jamesqquick",
      twitter: "https://twitter.com/jamesqquick",
      linkedin: "https://www.linkedin.com/in/jamesqquick",
    },
  },
  {
  name: "Tessa Mero",
  bio: "Developer Advocacte, Cloudinary",
  imageURL:
    "https://pbs.twimg.com/profile_images/1256720658798534657/22pbZTRW.jpg",
  links: {
    github: "https://github.com/tessamero",
    twitter: "https://twitter.com/tessamero",
    linkedin: "https://www.linkedin.com/in/tessamero",
  },
},
  {
    name: "Segun Adebayo",
    bio: "Creator, Chakra UI",
    imageURL:
      "https://pbs.twimg.com/profile_images/1169353373012897802/skPUWd6e_400x400.jpg",
    links: {
      github: "https://github.com/mxstbr",
      twitter: "https://twitter.com/mxstbr",
      linkedin: "https://www.linkedin.com/in/mxstbr",
    },
  },
  {
    name: "Domitrius Clark",
    bio: "Advocate Engineer, Cloudinary",
    imageURL:
      "https://media-exp1.licdn.com/dms/image/C4E03AQFMkMlJneUeeQ/profile-displayphoto-shrink_800_800/0?e=1605139200&v=beta&t=xe6RM3zbxA119i4B-hg0uMGjO4i6IE8umKOpIFFGtg4",
    links: {
      github: "https://github.com/domitriusclark",
      twitter: "https://twitter.com/domitriusclark",
      linkedin:
        "https://www.linkedin.com/in/domitriusanthony/",
    },
  },
//   {
//     name: "Shodipo Ayomide",
//     bio: "Founder, unStack Africa & Senior Developer Advocate",
//     imageURL: shodipoayomide,
//     links: {
//       github: "https://github.com/developerayo",
//       twitter: "https://twitter.com/developerayo",
//       linkedin: "https://linkedin.com/in/shodipo-ayomide",
//     },
//   },
//   {
//     name: "Kingdom Orjiewuru",
//     bio: "Co-Founder unStack Africa & Software Engineer, Aula",
//     imageURL:
//       "https://avatars2.githubusercontent.com/u/26261917?s=400&u=6a307e226cd2aef7f38968644047a8e80e336a4f&v=4",
//     links: {
//       github: "https://github.com/kingisaac95",
//       twitter: "https://twitter.com/kingisaac95?lang=en",
//       linkedin: "https://ng.linkedin.com/in/kingdomorjiewuru",
//     },
//   },
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
       {speakers.map(({ name, imageURL, bio, links }) => {
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
        })} 
    </section>
  )
}

export default Speakers
