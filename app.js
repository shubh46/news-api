$.ajax({
    type: 'GET',
    url: 'https://newsapi.org/v2/top-headlines?sources=abc-news&apiKey=3449fa02267b40518f1422b315334332',
    success: function(res) {
   // console.log(res.articles[0].author);
    document.getElementById('heading').innerHTML = res.articles[0].source.name;
    document.getElementById('demo').innerHTML = res.articles[0].title;


}
});