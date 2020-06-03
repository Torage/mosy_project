class NewsCard {
    constructor(id, category, title, description, url, urlToImage, content, author, publishedAt) {
        this.id = id;
        this.category = category;
        this.title = title;
        this.description = description;
        this.url = url;
        this.urlToImage = urlToImage;
        this.content = content;
        this.author = author;
        this.publishedAt = publishedAt;
    }
}

export default NewsCard;
