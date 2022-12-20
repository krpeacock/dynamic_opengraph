const fullImagePath = window.location.origin + "/logo2.svg";

[
  ["image", fullImagePath],
  ["title", "Dynamically loaded title"],
  ["description", "Description of the website"],
].forEach(([key, value]) => {
  // If meta tag is not found, create it
  if (!document.querySelector(`meta[property="og:${key}"]`)) {
    const meta = document.createElement("meta");
    meta.setAttribute("property", `og:${key}`);
    meta.setAttribute("content", value);
    document.head.appendChild(meta);
  } else {
    document
      .querySelector(`meta[property="og:${key}"]`)
      ?.setAttribute("content", value);
  }
});
