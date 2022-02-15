const GOOGLE_BOOKS_QUERY_KEYWORD_MAP = {
    'author': 'inauthor:',
    'title': 'intitle'
}

export enum GoogleBooksSearchTerms {
    AUTHOR = 'author',
    TITLE = 'title'
}

export class GoogleBooksSearchQuery {
    private query: string;

    constructor(queryConfigMap: any) {
        this.buildQuery(queryConfigMap);
    }

    public getQuery(): string {
        return this.query
    }

    private buildQuery(queryConfigMap) {
        for (let key in Object.keys(queryConfigMap)) {
            const search = queryConfigMap[key];
            const terms = this.parseKeyForQueryWord(key);
            this.query += `${terms}${search}+`
        }
    }

    private parseKeyForQueryWord(key) {
        const queryKeyword = GOOGLE_BOOKS_QUERY_KEYWORD_MAP[key];
        return queryKeyword
    }
}