require('isomorphic-fetch')

const withFetch = () =>{
fetch('https://example.com').then(res=>{
  console.log(res)
});
}

withFetch()