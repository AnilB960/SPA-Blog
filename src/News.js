import React, { Component } from "react";

class News extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLoaded: false,
            items: [],
            count: 0,
        }
    }

    // Ajax call method
    componentDidMount() {

        // Call the function that fetches the data from google news API.
        this.getData();

        // Runs for evry 5 seconds and calls function getData each time.
        setInterval(this.getData, 5000); // runs every 5 seconds.
    }

    getData = () => {


        var counter = this.state.count + 1;
        fetch('https://newsapi.org/v2/top-headlines?sources=google-news&apiKey=a3d42a1bc6734edea0e1d5c5146d8681')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json,
                    count: counter,
                })
            });
    }

    render() {

        var { isLoaded, items, count } = this.state;

        if (!isLoaded) {
            return <div className="loading">Loading.. (Check your network connection once)</div>
        }
        else {
            return (
                <div>
                    <div className="news-heading">
                        {/* Rendering the count for showing ajax call is working fine*/}
                        <p>News Updated: {count} time(s)</p>
                        <h2>The Top 10 Headlines are here: (Updates for every 5 seconds)</h2>
                    </div>
                    <div className="news">
                        <ul>
                            {items.articles.map(item => (
                                <li key={item.url}>
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            );
        }
    }

}

export default News;