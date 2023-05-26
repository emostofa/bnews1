import React, { Component } from 'react'
import Newsitem from './Newsitem'
import imgError from './imgError.png'

export default class News extends Component {

   constructor(){
       super();
       this.state = {
        articles: [],
        loading: false,
        page: 1,
        country: 'us',
        
       };
       
       
       
    };

       async componentDidMount(){
        const url = `https://newsapi.org/v2/top-headlines?country=${this.state.country}&apiKey=201d817950df4a249160a2187ab8d113&page=${this.state.page}`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({articles: parsedData.articles});
        //fetch will not work on mobile devices as the api does not support fetching from host other than 
        // localhost
        // this will show up as undefined in other devices
        
    }
    
   
    
  render() {
    
    let handlePrev = ()=>{
        if (this.state.page >= 1) this.setState({
            page: this.state.page -1
        })
    }
    let handleNext = ()=>{
        this.setState({
            page: (this.state.page + 1)
        })
    }
    return (
        

        <div>
            <div className="d-inline-flex my-5 mx-3 bg-dark">

                <div className='row' >
                <h2 className='d-flex justify-content-center mt-5 mb-2'>Top News Headlines</h2>
                    {this.state.articles.map((element) => {
                       //console.log(typeof element)
                        return <div className='col-md-4' key={element.url} >
                            <Newsitem title={element.title ===null?'Not available':element.title} 
                            description={element.description ===null? 'Not available!':element.description} imgUrl={element.urlToImage===null? imgError:element.urlToImage}
                                url={element.url} readMore={element.url}>

                            </Newsitem>
                        </div>
                        
                }
                    ) 
                
                }

                    
                </div>
            </div>
            <div className='container d-flex justify-content-between'>

                    <button type="button" className="btn btn-primary btn-lg" onClick={handlePrev} >&larr; Prev</button>
                    <button type="button" className="btn btn-primary btn-lg" onClick={handleNext}>Next &rarr;</button>

            </div>
            
        </div>



        
      

    )
  }
}
