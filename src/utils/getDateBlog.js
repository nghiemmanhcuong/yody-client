const getDateBlog = (time) => {
    const date = new Date(time);
    const year = date.getFullYear();
    const month = date.getMonth();
    const day = date.getDate();

    return day + '/' + month + '/' + year;
};

export default getDateBlog;