// Define pre-existing news data
const preExistingNews = [
    {
      title: "PM's Scathing Tweet On Congress After 600 Lawyers Write To Chief Justice.",
      content: "No wonder, 140 crore Indians are rejecting them,Prime Minister Narendra Modi said in a swipe at the Congress after hundreds of lawyers wrote about concerns over attempts to undermine the judiciary's integrity",
      imageUrl: "tl9s7ffg_pm-narendra-modi_625x300_11_February_24.webp"
    },
   
    {
        title: "High Court Rejects Plea To Remove Arvind Kejriwal As Chief Minister After Arrest",
        content: "There may be practical difficulties but that is something else. Where is the legal bar? the court asked.",
        imageUrl: "1lfjtsuo_arvind-kejriwal-ani-650_625x300_09_September_22.webp"
      },
      {
        title: "This wheelchair-bound man's bungee jump in Rishikesh proves 'nothing is impossible",
        content: "A man on a wheelchair impressed the internet with his daring bungee jump in Rishikesh. A video of this which was shared on Instagram by 'Rishikesh Adventures' went viral with 28 million views.",
        imageUrl: "wheelchair-man-bungee-jump-281159113-16x9_0.avif"
      },
      {
        title: "Dutch pilot shares rare glimpse of Aurora Borealis taken from cockpit",
        content: "Dutch pilot Christiaan van Heijst shared a mesmerising picture of the Northern Lights taken from the cockpit.",
        imageUrl: "northern-lights-280919706-16x9_0.webp"
      },
      {
        title: "With Yuvraj Singh as mentor and Brian Lara as guide, SRH’s Abhishek Sharma hopes to realise his potential",
        content: "Yuvraj Singh had admonished Abhishek Sharma with a post on X about the way he got out after scoring Sunrisers Hyderabad's fastest fifty — in just 16 balls — on Wednesday night.",
        imageUrl: "abhishek-sharma.jpg"
      }
    
  ];
  
  // Function to display pre-existing news articles
  function displayPreExistingNews() {
    const existingNewsContainer = document.getElementById('existingNews');
    preExistingNews.forEach(news => {
      const article = document.createElement('div');
      article.className = 'article';
      article.innerHTML = `
        <h2>${news.title}</h2>
        <img src="${news.imageUrl}" alt="${news.title}">
        <p>${news.content}</p>
      `;
      existingNewsContainer.appendChild(article);
    });
  }
  
  const newsForm = document.getElementById('newsForm');
  const newsContainer = document.getElementById('newsContainer');
  const existingNewsContainer = document.getElementById('existingNews');
  
  // Display pre-existing news articles
  preExistingNews.forEach(news => {
    publishNews(existingNewsContainer, news.title, news.content, news.imageUrl);
  });
  
  // Event listener for submitting the news form
  newsForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const title = document.getElementById('newsTitle').value;
    const content = document.getElementById('newsContent').value;
    const imageUrl = document.getElementById('newsImage').value;
    publishNews(newsContainer, title, content, imageUrl);
    newsForm.reset();
  });
  
  // Function to publish a new news article
  function publishNews(container, title, content, imageUrl) {
    const article = document.createElement('div');
    article.className = 'article';
    article.innerHTML = `
      <h2>${title}</h2>
      <img src="${imageUrl}" alt="${title}">
      <p>${content}</p>
    `;
    container.appendChild(article);
  }
  
  // Call the function to display pre-existing news articles
  displayPreExistingNews();

  // Call the publishNews function with sample data

publishNews("Sample News Title", "Sample news content goes here.", "https://example.com/sample-image.jpg");

