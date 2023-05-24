import React, { Component } from 'react'
import Newsitem from './Newsitem'
import imgError from './imgError.png'

export default class News extends Component {
    articles =  [
        {
            "source": {
                "id": "cbs-news",
                "name": "CBS News"
            },
            "author": "Aliza Chasan",
            "title": "Fertility app Premom shared user health data with third parties, FTC says",
            "description": "Easy Healthcare, which owns Premom, has agreed to pay $200,000 in fines but did not admit to any wrongdoing.",
            "url": "https://www.cbsnews.com/news/premom-fertility-app-shared-user-data-ftc-says-easy-healthcare/",
            "urlToImage": "https://assets1.cbsnewsstatic.com/hub/i/r/2023/05/18/8f1e12e6-e7ff-45b0-ba04-9f3b3e0833ab/thumbnail/1200x630/4559b35538680d8e8428319b70c8bf45/gettyimages-1397292001.jpg",
            "publishedAt": "2023-05-18T01:15:46+00:00",
            "content": "A free fertility app used to track ovulation shared users' health information with other companies, including Google and China-based marketing and analytics firms, the Federal Trade Commission said W… [+2051 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "Mary Kekatos",
            "title": "South Carolina autism clinic director indicted by federal jury for allegedly defrauding Medicaid out of thousands",
            "description": "Stamatina Bourret, 41, was indicted on 21 counts of health care fraud.",
            "url": "https://abcnews.go.com/Health/south-carolina-autism-clinic-director-indicted-federal-jury/story?id=99388124",
            "urlToImage": "https://s.abcnews.com/images/Health/agapi-offices-ht-ps-230517_1684336120166_hpMain_16x9_992.jpg",
            "publishedAt": "2023-05-18T01:02:43Z",
            "content": "A South Carolina woman who ran an autism clinic is facing federal charges of health care fraud, according to the U.S. Attorney's Office for the District of South Carolina.\r\nStamatina \"Nina\" Bourret, … [+2117 chars]"
        },
        {
            "source": {
                "id": "google-news-au",
                "name": "Google News (Australia)"
            },
            "author": "ABC News",
            "title": "Queensland Premier Annastacia Palaszczuk confirms new-look cabinet, Shannon Fentiman set to take over health portfolio from Yvette D'Ath - ABC News",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMicWh0dHBzOi8vd3d3LmFiYy5uZXQuYXUvbmV3cy8yMDIzLTA1LTE4L3BhbGFzemN6dWstY2FiaW5ldC1yZXNodWZmbGUteXZldHRlLWRhdGgtc2hhbm5vbi1mZW50aW1hbi1oZWFsdGgvMTAyMzYwODYy0gEoaHR0cHM6Ly9hbXAuYWJjLm5ldC5hdS9hcnRpY2xlLzEwMjM2MDg2Mg?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-05-18T00:48:44+00:00",
            "content": null
        },
        {
            "source": {
                "id": "news24",
                "name": "News24"
            },
            "author": "Cebelihle Bhengu",
            "title": "Phoenix rising? KZN health department denies allegation that 'dead' woman woke up in mortuary",
            "description": "The Department of Health in KwaZulu-Natal has dismissed a Durban woman's claims that she woke up in a mortuary at Mahatma Gandhi Hospital.",
            "url": "https://www.news24.com/news24/southafrica/news/phoenix-rising-kzn-health-department-denies-allegation-that-dead-woman-woke-up-in-mortuary-20230517",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/2256/c0da4d2c79484d6c8d079f36ff3c546e.jpg",
            "publishedAt": "2023-05-17T20:56:02+00:00",
            "content": "<ul><li>The KZN health department denied that a patient was declared dead and sent to a mortuary, only to be found alive.</li><li>It said there were no records that the body of Constantia Junior Gove… [+2032 chars]"
        },
        {
            "source": {
                "id": "google-news-ca",
                "name": "Google News (Canada)"
            },
            "author": "Calgary Herald",
            "title": "Alberta Election 2023 live: NDP turns eye to private health contracts | Younger voters likely key to election outcome: poll | UCP, NDP trade barbs on taxes, cost of promises - Calgary Herald",
            "description": null,
            "url": "https://news.google.com/rss/articles/CBMiUWh0dHBzOi8vY2FsZ2FyeWhlcmFsZC5jb20vbmV3cy9wb2xpdGljcy9hbGJlcnRhLWVsZWN0aW9uLTIwMjMtbGl2ZS11cGRhdGVzLW1heS0xN9IBf2h0dHBzOi8vY2FsZ2FyeWhlcmFsZC5jb20vbmV3cy9wb2xpdGljcy9hbGJlcnRhLWVsZWN0aW9uLTIwMjMtbGl2ZS11cGRhdGVzLW1heS0xNy93Y20vNDY5ODc0MGQtOGQ4ZC00M2MxLTg0N2MtYmNhODc2YTQ3MWFmL2FtcC8?oc=5",
            "urlToImage": null,
            "publishedAt": "2023-05-17T18:00:00+00:00",
            "content": null
        },
        {
            "source": {
                "id": "the-washington-post",
                "name": "The Washington Post"
            },
            "author": "Elisabeth Rosenthal",
            "title": "Denials of health-insurance claims are rising — and getting weirder",
            "description": "The Department of Health and Human Services is supposed to keep data on how insurance companies handle claims, but it's dropping the ball.",
            "url": "https://www.washingtonpost.com/opinions/2023/05/17/health-insurance-denial-claims-reasons/",
            "urlToImage": "https://www.washingtonpost.com/wp-apps/imrs.php?src=https://arc-anglerfish-washpost-prod-washpost.s3.amazonaws.com/public/25TJ53WGKEI63HGFUWFE63MEZU_size-normalized.jpg&w=1440",
            "publishedAt": "2023-05-17T10:45:00Z",
            "content": "Comment on this story\r\nComment\r\nElisabeth Rosenthal is senior contributing editor at KFF Health News and author of An American Sickness: How Healthcare Became Big Business and How You Can Take it Bac… [+6264 chars]"
        },
        {
            "source": {
                "id": "the-washington-times",
                "name": "The Washington Times"
            },
            "author": "Stephen Dinan",
            "title": "National Institutes of Health cuts off Wuhan Institute of Virology from taxpayer funding",
            "description": "The National Institutes of Health has quietly erased the Wuhan Institute of Virology -- the lab facility at the center of speculation about the origin of COVID-19 -- from its list of labs that can conduct animal testing with U.S. money.",
            "url": "https://www.washingtontimes.com/news/2023/may/17/national-institutes-health-cuts-wuhan-institute-vi/",
            "urlToImage": "https://twt-thumbs.washtimes.com/media/image/2021/02/03/virus_outbreak_china_who_mission_52164_c0-242-5808-3630_s1200x700.jpg?2eea077db11081564a9c9ccf41d000f90ed9795c",
            "publishedAt": "2023-05-17T10:44:00Z",
            "content": "The National Institutes of Health has quietly erased the Wuhan Institute of Virology the facility at the center of speculation about the origin of COVID-19 from its list of labs that can conduct anim… [+5608 chars]"
        },
        {
            "source": {
                "id": "medical-news-today",
                "name": "Medical News Today"
            },
            "author": "Eileen Bailey",
            "title": "Even metabolically healthy people with obesity face increased risk of cancer",
            "description": "Researchers say both metabolically healthy and unhealthy people with obesity face higher cancer risks, stressing the need to keep blood pressure and blood sugar levels under control",
            "url": "http://www.medicalnewstoday.com/articles/even-metabolically-healthy-people-with-obesity-face-increased-risk-of-cancer",
            "urlToImage": "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2023/05/bike-shadow-obesity-cancer-risk-732x549-thumbnail.jpg",
            "publishedAt": "2023-05-17T09:37:00Z",
            "content": "<ul><li>Obesity is an established risk factor for a number of weight-related cancers.</li><li>New research shows that both metabolically healthy and unhealthy forms of obesity are associated with an … [+6877 chars]"
        },
        {
            "source": {
                "id": "msnbc",
                "name": "MSNBC"
            },
            "author": null,
            "title": "DeSantis’ new immigration law imposes huge financial penalties for immigration offenses",
            "description": "Florida Gov. Ron DeSantis’ new immigration law will impose huge financial penalties for immigration offenses in Florida. Immigration lawyer Andrea Reyes discusses this and the expected health and safety ramifications of this new law that many are calling crue…",
            "url": "https://www.msnbc.com/the-reidout/watch/desantis-new-immigration-law-imposes-huge-financial-penalties-for-immigration-offenses-174578757887",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/mpx/2704722219/2023_05/1684288569141_N_reidout_desantis_230516_1920x1080-595zur.jpg",
            "publishedAt": "2023-05-17T01:56:27Z",
            "content": null
        },
        {
            "source": {
                "id": "usa-today",
                "name": "USA Today"
            },
            "author": null,
            "title": "What is a balanced diet? Knowing the answer can help you make better food choices.",
            "description": "A balanced diet is vital for maintaining good mental and physical health, optimal weight and fitness, and assuring you feel your best.",
            "url": "https://www.usatoday.com/story/life/health-wellness/2023/05/14/what-is-a-balanced-diet-and-why-the-answer-is-important/70188995007/",
            "urlToImage": "https://www.gannett-cdn.com/presto/2023/01/03/USAT/dba26ab9-095c-4e83-8962-150ae33e479c-GettyImages-1390699821.jpg?auto=webp&crop=2120,1193,x0,y0&format=pjpg&width=1200",
            "publishedAt": "2023-05-15T05:29:25+00:00",
            "content": "A balanced diet is vital for maintaining good mental and physical health, optimal weight and fitness, and assuring you feel your best.\r\n\"Finding a way of eating that is nutritious and sustainable not… [+4891 chars]"
        },
        {
            "source": {
                "id": "recode",
                "name": "Recode"
            },
            "author": "Kelsey Piper",
            "title": "AI shouldn’t overshadow causes like malaria and poverty",
            "description": "Fears of an AI future are taking up all our focus. But we shouldn’t forget present-day problems like global health and poverty",
            "url": "https://www.vox.com/future-perfect/2023/5/10/23717878/artificial-intelligence-global-health-malaria-global-poverty",
            "urlToImage": "https://cdn.vox-cdn.com/thumbor/D2FUsgmEOb_PQz2kQW3voI7fN3s=/0x430:6000x3571/fit-in/1200x630/cdn.vox-cdn.com/uploads/chorus_asset/file/24646472/GettyImages_1247905653.jpg",
            "publishedAt": "2023-05-10T13:10:00Z",
            "content": "How do you do the most good in the world? \r\nA few years ago, my colleague Dylan Matthews wrote about an effective-altruism-inspired framework for answering that question: importance, neglectedness, a… [+5463 chars]"
        },
        {
            "source": {
                "id": "medical-news-today",
                "name": "Medical News Today"
            },
            "author": "Yasemin Nicola Sakay",
            "title": "In Conversation: Investigating the power of music for dementia",
            "description": "In this episode of our podcast, MNT investigates how sounds, silence, and music affect our cognitive health, and whether it can be a powerful tool for treating dementia.",
            "url": "http://www.medicalnewstoday.com/articles/in-conversation-investigating-the-power-of-music-for-dementia",
            "urlToImage": "https://post.medicalnewstoday.com/wp-content/uploads/sites/3/2023/04/732x549-featureinconvo-music-2.jpg",
            "publishedAt": "2023-04-28T10:46:32Z",
            "content": "Music can help people with dementia recover some aspects of their memory, feel calmer, and boost their moodand evidence of this is growing each day. However, what is it about music that has such a pr… [+14301 chars]"
        },
        {
            "source": {
                "id": "the-irish-times",
                "name": "The Irish Times"
            },
            "author": "Jennifer Bray",
            "title": "Abortion rules should be relaxed, review to recommend",
            "description": "Minister for Health Stephen Donnelly considering report by barrister Marie O’Shea which examined operation of the existing law",
            "url": "https://www.irishtimes.com/ireland/social-affairs/2023/03/29/review-calls-for-abortion-law-to-be-relaxed/",
            "urlToImage": "https://www.irishtimes.com/resizer/DycgF-s39PfaIVo4cOhhhNhDjqM=/1200x630/filters:format(jpg):quality(70):focal(1109x649:1119x659)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/YVVSZCLNN6CW4NWJKGEPUSEAPE.jpg",
            "publishedAt": "2023-03-29T04:15:00Z",
            "content": "A new review of the States abortion law is set to recommend a loosening of existing rules which could involve the removal of the three-day wait to access medication.\r\nMinister for Health Stephen Donn… [+2934 chars]"
        },
        {
            "source": {
                "id": "the-globe-and-mail",
                "name": "The Globe And Mail"
            },
            "author": "Wency Leung",
            "title": "‘COVID hasn’t gone away’: Five things health experts say we must do to end the pandemic",
            "description": "Boosting health care capacity, encouraging third doses and better understanding long COVID are among the issues health experts say need to be addressed",
            "url": "https://www.theglobeandmail.com/canada/article-covid-19-pandemic-not-over/",
            "urlToImage": "https://www.theglobeandmail.com/resizer/nYUYq7AN4xv1_6tgavE1CKi6OvQ=/1200x800/filters:quality(80)/cloudfront-us-east-1.images.arcpublishing.com/tgam/OSOQKLUMCZEDDPFOKUWLUFOLFY.png",
            "publishedAt": "2022-06-15T17:00:00Z",
            "content": "Restaurants are open. Festivals are back. Masks, for the most part, are optional. And starting Monday, June 20, proof of vaccination will no longer be required of Canadian air and train passengers.\r\n… [+7848 chars]"
        },
        {
            "source": {
                "id": "rte",
                "name": "RTE"
            },
            "author": "Will Goodbody",
            "title": "Efforts continue to assess extent of ransomware issue",
            "description": "Efforts will continue today to assess the impact of the ransomware attack on the Health Service Executive, healthcare facilities and services here.",
            "url": "https://www.rte.ie/news/coronavirus/2021/0515/1221735-hse-cyber-atack/",
            "urlToImage": "https://img.rasset.ie/0016bdc3-1600.jpg",
            "publishedAt": "2021-05-15T06:18:56Z",
            "content": "Efforts will continue today to assess the impact of the ransomware attack on the Health Service Executive, healthcare facilities and services.\r\nThe HSE has said it will take a number of days before i… [+1264 chars]"
        }
    ]
    constructor(){
       super();
       this.state = {
        articles: this.articles,
        loading: false
       }
       
    }
    
  render() {
    
  
    return (
        

        <div>
            <div className="d-inline-flex my-5 mx-3 bg-dark">

                <div className='row' >
                <h2 className='d-flex justify-content-center mt-5 mb-2'>Top News Headlines</h2>
                    {this.state.articles.map((element) => {
                       
                        return <div className='col-md-4' key={element.url} >
                            <Newsitem title={element.title ===null?'Not available':element.title} 
                            description={element.description===null? 'Not Available':element.description} imgUrl={element.urlToImage===null? imgError:element.urlToImage}
                                url={element.url} readMore={element.url}>

                            </Newsitem>
                        </div>
                        
                }
                    )}

                </div>
            </div>

            
        </div>



        
      

    )
  }
}
