export class Topnews {
    constructor(news) {
        {
            let articles = new Array({
                source: { id: '', name: '' },
                author: '',
                title: '',
                description: '',
                url: '',
                urlToImage: '',
                publishedAt: '',
                content: '',
            });
            console.log('initial:', articles);
            news.articles.map((article) => {
                articles.push({
                    source: { id: article.source.id, test: article.source.name },
                    author: article.author,
                    title: article.title,
                    description: article.description,
                    url: article.url,
                    urlToImage: article.urlToImage,
                    publishedAt: article.publishedAt,
                    content: article.content,
                });
            });
            // console.log(articles)

            this.status = news.status;
            this.totalResults = news.totalResults;
            this.articles = articles;
        }
    }
}
