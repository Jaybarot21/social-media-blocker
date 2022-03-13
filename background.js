//URLs to block
let blockedUrls = [
  {
    link: "twitter.com",
  },
  {
    link: "facebook.com",
  },
  {
    link: "instagram.com",
  },
  {
    link: "linkedin.com",
  },
  {
    link: "web.whatsapp.com",
  },
  {
    link: "reddit.com",
  },
  {
    link: "pinterest.com",
  },
  {
    link: "youtube.com",
  },
];

blockedUrls.forEach((element) => {
  if (window.location.origin.includes(element.link)) {
    document.getElementsByTagName("body")[0].innerHTML =
      '<div><img src="https://indianmemetemplates.com/wp-content/uploads/Bilkul-bakwas-hai-yeh-aap-band-kar-do-isey.jpg" style="margin: 0px auto; height: 100vh; display: flex;"></div>';
    }
});
