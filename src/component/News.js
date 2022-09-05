import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner';

export default class News extends Component {

    articles = [


    ]
    constructor() {
        super();
        console.log("Hello i am constructor")
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {

        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bae22ba6066d4b7e82cc20f7ac49e0cd&page=1&pageSize= ${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({
            articles: parsedData.articles,
            totalResults: parsedData.totalResults,
            loading: false
        })
    }
    handlePreviousClick = async () => {
        console.log("previous")
        let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bae22ba6066d4b7e82cc20f7ac49e0cd&page=${this.state.page - 1}&pageSize= ${this.props.pageSize}`;
        this.setState({ loading: true });
        let data = await fetch(url);
        let parsedData = await data.json()
        console.log(parsedData);
        this.setState({ articles: parsedData.articles })
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        })
    }
    handleNextClick = async () => {
        console.log("Next")
        if (!(this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize))) {



            let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=bae22ba6066d4b7e82cc20f7ac49e0cd&page=${this.state.page + 1}&pageSize= ${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            let parsedData = await data.json()
            console.log(parsedData);

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            })
        }
    }
    render() {
        console.log("render")
        return (
            <div className="container my-3">
                <h1 className="text-center">NewsWorld - Top headline</h1>
                {this.state.loading && <Spinner />}

                <div className="row">
                    {this.state.articles.map((element) => {

                        return <div className="col-md-4" key={element.url}>

                            <NewsItem title={element.title ? element.title : ""} description={element.description ? element.description : ""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>

                    })}
                </div>

                <div className="container d-flex justify-content-between ">
                    <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePreviousClick}>&larr; previous</button>
                    <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>

                </div>


            </div>

        )
    }
}
