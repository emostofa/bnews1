import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Newsitem from "../Newsitem";
import imgError from "./imgError.png";
import Spinner from "../Spinner";
const apiKey = 'b87c7a1b9fc44569859cb77b6f6fd969';




 


export default function News() {

  const [state, setState] = useState({
      articles: [],
      loading: false,
      page: 1,
      country: "us",
      totalResults: 0,
  }
  
  );
  useEffect(() => {
    componentDidMount();
    console.log(state.articles.length)
  }, []);
  
  async function componentDidMount() {
    const url = `https://newsapi.org/v2/top-headlines?country=${state.country}&apiKey=${apiKey}&page=${state.page}&pageSize=10`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(state.articles)
    //fetch will not work on mobile devices as the api does not support fetching from host other than
    // localhost
    // this will show up as undefined in other devices
   setState({ articles: parsedData.articles,page:1 });
   console.log(parsedData.articles.length)
  }
 

async function fetchMoreData(){
  console.log(state.articles)

  //setState({ page: state.page + 1 });
  console.log(state.page)


  const url = `https://newsapi.org/v2/top-headlines?country=${state.country}&apiKey=${apiKey}&page=${state.page+1}&pageSize=10`;
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(state.articles)
  setState({
    articles: state.articles.concat(parsedData.articles),
    totalResults: parsedData.totalResults,
    
  });
  console.log(state.page,state.articles)
}


  return (

      <div >
        <h2 className='d-flex justify-content-center mt-5 mb-2'>Top News Headlines</h2>
            {/* {console.log(state.articles.length)} */}
        <InfiniteScroll
          dataLength={20}
          next={fetchMoreData}
          hasMore={true}
          loader={<Spinner/>}
          
        >
          <div className="d-flex my-5 mx-3 bg-dark">
            <div className='row' >
            {/* {console.log(state.articles.length)} */}
              {state.articles !== undefined &&  state.articles.map((element) => {
                // console.log(state.articles.length)
                return <div className='col-md-4' key={element.url} >
                  <Newsitem title={element.title === null ? 'Not available' : element.title}
                    description={element.description === null ? 'Not available!' : element.description}
                    imgUrl={element.urlToImage === null ? imgError : element.urlToImage}
                    url={element.url} readMore={element.url}>

                  </Newsitem>

                </div>
              })
              }
            </div>
          </div>
        </InfiniteScroll>

      </div>

    )
  
}
