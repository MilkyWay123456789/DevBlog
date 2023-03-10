export interface BlogDetail {
    title: string
    bodyHTML: string
    createdAt: string
    author: {
        name: string
        url: string
        avatar: string
    }
}

export interface BlogPost {
    id?: number
    url?: string
    discussionUrl?: string
    title: string
    html?: string
    bodyText: string
    tags: string[]
    createdAt: string
    lastEditedAt?: string | null
    author: {
        name: string
        url: string
        avatar: string
    }
}