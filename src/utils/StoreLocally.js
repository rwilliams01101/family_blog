function StoreLocally(blogId) {
    console.log("Blog id ", blogId)
    localStorage.setItem('blogPostNumber', blogId.toString());
};

export default StoreLocally