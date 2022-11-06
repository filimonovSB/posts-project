export const selectSortedQueryPosts = (state, query, sort) => {
  return sort != null
    ? [...state.posts.posts]
        .sort((a, b) => a[sort].localeCompare(b[sort]))
        .filter((post) =>
          post.title.toLowerCase().includes(query.toLowerCase())
        )
    : state.posts.posts.filter((post) =>
        post.title.toLowerCase().includes(query.toLowerCase())
      )
}
