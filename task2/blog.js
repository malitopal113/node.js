const readline = require('readline');

let blogs = [
    {title: 'first blog', content: 'turkiye'},
    {title: 'second blog', content: 'denmark'},
    {title: 'third blog', content: 'belgium'},  
  ]

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
}); 
  
const showBlogs = () => {
    console.log('Current Blogs');
    
    blogs.sort((a, b) => a.title.localeCompare(b.title));
    blogs.forEach((blog, index) => {
      console.log(`${index + 1}. ${blog.title} - ${blog.content}`);
    })
    console.log();
    
  }

  const addPost = (title, post) => {
    blogs.push({title: title, content: post});
    console.log('Blog added!');
    console.log();
    
   }

const promptRun = () => {
  rl.question('Enter blog title: ', (title) => {
    rl.question('Enter blog content: ', (content) => {
      addPost(title, content);
      rl.question('Do you want to add another blog? (yes/no): ', (answer) => {
        if (answer === 'yes') {
          promptRun();
          showBlogs();

        } else {
            showBlogs();
          rl.close();
        }
      });
    }   
    )}
)
    
  }

  
showBlogs();
promptRun();