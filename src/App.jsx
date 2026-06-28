import React from 'react'
import Card from './components/Card'






const App = () => {


  const jobs = [
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
      company: "Google",
      datePosted: "2 days ago",
      post: "Frontend Software Engineer",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$85/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
      company: "Amazon",
      datePosted: "5 days ago",
      post: "Senior UI/UX Designer",
      tag1: "Part Time",
      tag2: "Senior Level",
      pay: "$120/hr",
      location: "Mumbai, India",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
      company: "Apple",
      datePosted: "1 week ago",
      post: "Product Designer",
      tag1: "Full Time",
      tag2: "Senior Level",
      pay: "$115/hr",
      location: "Hyderabad, India",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
      company: "Microsoft",
      datePosted: "3 days ago",
      post: "React Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$95/hr",
      location: "Noida, India",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/05/Meta_Platforms_Inc._logo.svg",
      company: "Meta",
      datePosted: "10 days ago",
      post: "Frontend Engineer",
      tag1: "Remote",
      tag2: "Senior Level",
      pay: "$130/hr",
      location: "London, UK",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
      company: "Netflix",
      datePosted: "2 weeks ago",
      post: "UI Engineer",
      tag1: "Remote",
      tag2: "Mid Level",
      pay: "$140/hr",
      location: "Los Angeles, USA",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/2/21/Nvidia_logo.svg",
      company: "NVIDIA",
      datePosted: "6 days ago",
      post: "Frontend Developer",
      tag1: "Full Time",
      tag2: "Mid Level",
      pay: "$105/hr",
      location: "Pune, India",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/8/8d/Adobe_Corporate_logo.svg",
      company: "Adobe",
      datePosted: "4 weeks ago",
      post: "UX Researcher",
      tag1: "Contract",
      tag2: "Senior Level",
      pay: "$100/hr",
      location: "Bengaluru, India",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/4/4d/OpenAI_Logo.svg",
      company: "OpenAI",
      datePosted: "1 day ago",
      post: "Frontend Engineer",
      tag1: "Remote",
      tag2: "Mid Level",
      pay: "$150/hr",
      location: "San Francisco, USA",
    },
    {
      brandLogo: "https://upload.wikimedia.org/wikipedia/commons/c/cc/Uber_logo_2018.png",
      company: "Uber",
      datePosted: "3 weeks ago",
      post: "Software Engineer - Web",
      tag1: "Full Time",
      tag2: "Junior Level",
      pay: "$88/hr",
      location: "Hyderabad, India",
    },
  ];


  console.log(jobs);


  return (
    <div className='parent'>
      {jobs.map(function (elem, idx) {
        console.log(idx);

        return <div key={idx}>
          <Card company={elem.company} logo={elem.brandLogo} date={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} loc={elem.location} />
        </div>
      })}


    </div>
  )
}

export default App
