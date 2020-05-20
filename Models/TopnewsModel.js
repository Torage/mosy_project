export class Topnews {
    constructor(news) {
        {
            let id = 0;
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
            news.articles.map((article) => {
                id++;
                articles.push({
                    source: { id: 'TN' + id, test: article.source.name },
                    author: article.author,
                    title: article.title,
                    description: article.description,
                    url: article.url,
                    urlToImage: article.urlToImage,
                    publishedAt: article.publishedAt,
                    content: article.content,
                });
            });
            articles.shift();
            this.status = news.status;
            this.totalResults = news.totalResults;
            this.articles = articles;
        }
    }
}
