
//stitch in overly ambitious external HTML blog post
// import $AngularBlog from '../data/AngularBlog' // HOTFIX FOR MANUAL BLOG, REFACTORED.
// import Feed from 'rss-to-json'

export default async function getMediumBlogPosts() {
	// // use corsProxy to get around cors protection, required if FETCHING directly from MediumRSS feed
  // const corsProxy = "https://cors-anywhere.herokuapp.com/"
  const blogRSS = 'https://medium.com/feed/@u.ariguzo.ua';
    
  // api to convert RSS to JSON => LIMITS = 1 Hour Update Time / 10,000 Requests per day 
  const rss2jsonAPI = 'https://api.rss2json.com/v1/api.json?rss_url=';

	let output = await fetch(rss2jsonAPI + blogRSS)
     .then(res => res.json())
     .then(json => {
      return [...json.items]})//, $AngularBlog].sort((a, b) => a.pubDate > b.pubDate ? -1 : 1 ))

  // // @TODO - explore rss-to-json package to convert locally => must import at top
  // let output = await Feed.load(corsProxy + blogRSS, function(err, rss){
  //     return [...rss.items, $AngularBlog].sort((a, b) => a.pubDate > b.pubDate ? -1 : 1 )
  // });

  // console.log("mediumRSS=>", output)

  
  return output
}