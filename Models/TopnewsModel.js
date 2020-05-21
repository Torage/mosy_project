export class Topnews {
    constructor(news) {
        {
            let id = 0;
            let articles = [
                {
                    source: { id: '#', name: '#' },
                    author: '#',
                    title: '#',
                    description: '#',
                    url: '#',
                    urlToImage: '#',
                    publishedAt: '#',
                    content: '#',
                },
            ];
            articles.shift();
            news.articles.map((article) => {
                id++;
                articles.push({
                    source: { id: 'TN' + id, name: article.source.name },
                    author: article.author,
                    title: article.title,
                    description: article.description,
                    url: article.url,
                    urlToImage: article.urlToImage,
                    publishedAt: article.publishedAt,
                    content: article.content,
                });
            });
            this.status = news.status;
            this.totalResults = news.totalResults;
            this.articles = articles;
        }
    }
}
