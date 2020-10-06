import React from "react"
// import shodipoayomide from "../../assets/img/speakers/shodipoayomide.JPG"

const speakers = [
  {
    name: "Amanda Casari",
    bio: "Engineering Manager OSS at Google",
    imageURL:
      "https://avatars.sched.co/5/f0/10589798/avatar.jpg?f98",
    links: {
      github: "https://github.com/amcasari",
      twitter: "https://twitter.com/amcasari",
      linkedin: "https://www.linkedin.com/in/amcasari",
    },
  },
  {
    name: "Aniedi Udo-Obong",
    bio: "Program Manager, Google",
    imageURL:
      "https://devfest-dakar.web.app/images/speakers/aniedi.jpg",
    links: {
      github: "https://github.com/aniediudo",
      twitter: "https://twitter.com/aniediudo",
      linkedin: "https://ng.linkedin.com/in/aniediudo",
    },
  },
  // {
  //   name: "Danny Thompson",
  //   bio: "Software Engineer & Podcast host for `Commit your code!",
  //   imageURL:
  //     "https://res.cloudinary.com/practicaldev/image/fetch/s--gNcEFf3v--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/359729/d5de48f7-efc3-4f1c-8566-4d946fc3724d.jpg",
  //   links: {
  //     github: "https://github.com/dannythompson901",
  //     twitter: "https://twitter.com/@DThompsonDev",
  //     linkedin: "https://www.linkedin.com/in/dannythompson901",
  //   },
  // },
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
    name: "Nader Dabit",
    bio: "Senior Developer Advocate, Amazon AWS",
    imageURL:
      "https://www.schoolstatus.com/hubfs/Social_Media/nader.jpg",
    links: {
      github: "https://github.com/dabit3",
      twitter: "https://twitter.com/dabit3",
      linkedin: "https://www.linkedin.com/in/naderdabit",
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
    name: "Adora Nwodo",
    bio: "Software Engineer, Microsoft",
    imageURL:
      "https://cdn.hashnode.com/res/hashnode/image/upload/v1573460393072/-F1dY-wHG.jpeg?auto=compress",
    links: {
      github: "https://github.com/AdoraNwodo",
      twitter: "https://twitter.com/AdoraNwodo",
      linkedin:
        "https://www.linkedin.com/in/adoranwodo",
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
    name: "Knut Melvær",
    bio: "Head of Developer Relations, Sanity.io",
    imageURL:
      "https://css-tricks.com/wp-content/uploads/2018/08/image-8-1-350x350.png",
    links: {
      github: "https://github.com/BolajiOlajide",
      twitter: "https://twitter.com/GantLaborde",
      linkedin:
        "https://www.linkedin.com/in/gant-laborde",
    },
  },
  {
    name: "Samson Goddy",
    bio: "Co-Founder, Open Source Community Africa",
    imageURL:
      "https://github.com/images/modules/site/readme/samson-goddy/Samson%20Low%20Res%20Social%202.jpg",
    links: {
      github: "https://github.com/samswag",
      twitter: "https://twitter.com/Samson_Goddy",
      linkedin:
        "https://ng.linkedin.com/in/samsongoddy",
    },
  },
  {
    name: "Chukwurah Phebian",
    bio: "Senior Frontend Engineer, Okra",
    imageURL:
      "https://media-exp1.licdn.com/dms/image/C4D03AQFxY8UjMAozFw/profile-displayphoto-shrink_800_800/0?e=1606953600&v=beta&t=V76Y7xOODgA8g7mx7F31J3euXWSMUqKLmyYBTiTr7U4",
    links: {
      github: "https://github.com/ph3bian",
      twitter: "https://twitter.com/ph3bian",
      linkedin:
        "https://www.linkedin.com/in/ph3bian/",
    },
  },
  {
    name: "Samuel Snopko",
    bio: "Head of Developer Relations, Storyblok",
    imageURL:
      "https://uc08235002fc23216ef4703b9f88.previews.dropboxusercontent.com/p/thumb/AA9AdTpafxvU1QcDOOVAxsKc814xziN9Eh7hyheYog9oVSHuuSBIE9wjWjTzQrfNzTVT9uN8Hos87Hvny8BnxHEuyh5G7n-p_PIB1MT9zbfMds3-kS3to7mD5h-FXgHgGbh_88zEip-JYGSxfFpErgdDYflQsud0ZWsKXqvAvohTT-LxXDTTMmTArnltAfucTXMg6iSUDzXdVhN-AkvVEBHfJCIrfjC0iDw6RlzSXH2fww177VhxOpUJqWi4gFn932ArtdFZX7o_uBYd1QguCAFZ2Qaqnzrw3Ge1IQVK5GPPsWF4w_Pd0-fpO52MNVNDsy_oi6I9X54an4PTAN0U5rxGarO9V_j3XOv4xNUXQ1KNFJQiPZKOa2WXEXqmHIv8D40kJhMu1-xwGBTuw5b8wVZ9/p.jpeg?size=2048x1536&size_mode=3",
    links: {
      github: "https://github.com/samuells",
      twitter: "https://twitter.com/SamuelSnopko",
      linkedin:
        "https://at.linkedin.com/in/samuelsnopko",
    },
  },
  {
    name: "Bolaji Olajide",
    bio: "Software Engineer, Pluralsight",
    imageURL:
      "https://media-exp1.licdn.com/dms/image/C4E03AQGcbAX3kCx3tg/profile-displayphoto-shrink_800_800/0?e=1605744000&v=beta&t=ZtjJsXWGBU3AvadgZSrx1l0O5xMvGU9RWURJu1-elrU",
    links: {
      github: "https://github.com/BolajiOlajide",
      twitter: "https://twitter.com/Bolaji___",
      linkedin:
        "https://www.linkedin.com/in/bolaji-olajide-95b08777/",
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
  {
    name: "Ademola Adegbuyi",
    bio: "Software Engineer, PayStack",
    imageURL:
      "https://media-exp1.licdn.com/dms/image/C4D03AQH_g5Zk83p4Gw/profile-displayphoto-shrink_400_400/0?e=1606348800&v=beta&t=exOesE-3WyQaAw9o08HU1DNth7cLAk-phYJnCVZPuww",
    links: {
      github: "https://github.com/ooade",
      twitter: "https://twitter.com/_ooade",
      linkedin:
        "https://ng.linkedin.com/in/ooade",
    },
  },
  // {
  //   name: "Gant Laborde",
  //   bio: "Chief Technical Officer, Infinity Red",
  //   imageURL:
  //     "https://res.cloudinary.com/practicaldev/image/fetch/s--7946-bAJ--/c_fill,f_auto,fl_progressive,h_320,q_auto,w_320/https://dev-to-uploads.s3.amazonaws.com/uploads/user/profile_image/99490/b1193958-26b5-4f03-a76d-fd1dfc0b400a.jpg",
  //   links: {
  //     github: "https://github.com/kmelve",
  //     twitter: "https://twitter.com/kmelve",
  //     linkedin:
  //       "https://www.linkedin.com/in/knutmelvaer/",
  //   },
  // },
  {
    name: "Akintunde Sultan",
    bio: "DevRel, Grant For The Web",
    imageURL:
      "https://cdn.substack.com/image/fetch/f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fbucketeer-e05bbc84-baa3-437e-9518-adb32be77984.s3.amazonaws.com%2Fpublic%2Fimages%2Fafc609cc-9eed-4045-9a38-b5b4f42ffcd0_1024x768.jpeg",
    links: {
      twitter: "https://twitter.com/hacksultan",
      linkedin:
        "https://www.linkedin.com/in/hacksultan/",
    },
  },
  {
    name: "Oluwatomisin Lalude",
    bio: "Frontend Developer, eBanqo Inc",
    imageURL:
      "https://pbs.twimg.com/profile_images/1305237123612717056/NOMKITr7_400x400.jpg",
    links: {
      github: "https://github.com/tomisinlalude",
      twitter: "https://twitter.com/tomisinlalude",
      linkedin:
        "https://www.linkedin.com/in/oluwatomisinlalude/",
    },
  },

  {
    name: "Shodipo Ayomide",
    bio: "Co-Founder, unStack Africa",
    imageURL:
      "https://miro.medium.com/max/3150/2*EYwoHZXvh3jjwfdrSqKQ5g.jpeg",
    links: {
      github: "https://github.com/developerayo",
      twitter: "https://twitter.com/developerayo",
      linkedin:
        "https://www.linkedin.com/in/shodipo-ayomide/",
    },
  },
  // {
  //   name: "More Coming Soon",
  //   bio: "More Coming Soon",
  //   imageURL:
  //     "",
  //   links: {
  //     github: "https://github.com/developerayo",
  //     twitter: "https://twitter.com/developerayo",
  //     linkedin:
  //       "https://www.linkedin.com/in/domitriusanthony/",
  //   },
  // },
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
                <div className="block-info-2 dark-outline">
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
                            aria-label={linkKey}
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
