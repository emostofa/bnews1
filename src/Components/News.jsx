import React, { useState, useEffect } from 'react'
import InfiniteScroll from 'react-infinite-scroll-component'
import Newsitem from "./Newsitem";
import imgError from "./imgError.png";
import Spinner from "./Spinner";

export default function News() {
    
        const apiKey = 'b87c7a1b9fc44569859cb77b6f6fd969';
        const [articles, setArticles] = useState([]);
        
        const [page, setPage] = useState(1);
        const [country, setCountry] = useState('us');
        const [totalResults, setTotalResults] = useState(0);
      
        const fetchArticles = async () => {
            
            const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}&page=${page}&pageSize=10`;
            let data = await fetch(url);
            let parsedData = await data.json();
            setArticles(parsedData.articles);
            setTotalResults(parsedData.totalResults);
            console.log(articles);
          };
        useEffect(() => {
          
      
          fetchArticles();
        }, []);

        
      
        const fetchMoreData = async () => {
          setPage(page+1);
          const url = `https://newsapi.org/v2/top-headlines?country=${country}&apiKey=${apiKey}&page=${page+1}&pageSize=10`;
          let data = await fetch(url);
          let parsedData = await data.json();
          setArticles(articles.concat(parsedData.articles));
          
        };
    
      
        return (
          <div>
            <h2 className="d-flex justify-content-center" style={{marginTop: '100px'}}>{`Top ${country === 'in' ? 'Indian': country.toUpperCase()} Headlines`}</h2>
      
            <InfiniteScroll
              dataLength={articles.length}
              next={fetchMoreData}
              hasMore={articles.length !== totalResults}
              loader={<Spinner />}
            >
              <div className="d-flex my-3 mx-3 bg-dark">
                <div className="row">
                  {articles.map((element) => (
                    <div className="col-md-4" key={element.url}>
                      <Newsitem
                        title={element.title === null ? 'Not available' : element.title}
                        description={element.description === null ? 'Not available!' : element.description}
                        imgUrl={element.urlToImage === null ? imgError : element.urlToImage}
                        url={element.url}
                        readMore={element.url}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </InfiniteScroll>
          </div>
        );
      };
      
     
      

