

const Blog = () => {
    return (
        <div className=" m-5 lg:m-10">
            <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <div className="flex items-center justify-between">
            <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">recent posts</h1>
           
        </div>
        <hr className="my-8 border-gray-200 dark:border-gray-700" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 xl:grid-cols-3">
            <div>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://miro.medium.com/v2/resize:fit:679/0*vq-JSMynSHUPXx70" alt="" />
                <div className="mt-8">
                    <span className="text-blue-500 uppercase">Express.js</span>
                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Express js is Node js library which helps backend code easy</h1>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">Express provides a wide range of features, including routing, middleware support, template engines integration, error handling, and much more, making it a popular choice for building web applications and APIs in Node.js. You can extend your server with various middleware packages available in the Node.js 
                    ecosystem or by writing your custom middleware functions to handle different aspects of your applications functionality.</p>
                    
                </div>
            </div>
            <div>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://static-00.iconduck.com/assets.00/nextjs-icon-1024x617-rl2bcqfj.png" alt="" />
                <div className="mt-8">
                    <span className="text-blue-500 uppercase">Next.js</span>
                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">Next.js is a popular React framework that enables server-side rendering (SSR), static site generation (SSG), and client-side rendering (CSR) for React applications. </h1>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">
                        Next.js provides a pages-based routing system, where each .js or .jsx file in the pages directory corresponds to a route in your application. For example, if you create a file named about.js inside the pages directory, it will be accessible at /about in your application.

Next.js also supports dynamic routes, API routes, and a wide range of plugins and optimizations to enhance the performance and development experience of your application.

Additionally, you can deploy your Next.js application to various platforms, including Vercel, which offers seamless integration with Next.js and provides hosting, deployment, and scaling services for your applications.</p>
                  
                </div>
            </div>
            <div>
                <img className="object-cover object-center w-full h-64 rounded-lg lg:h-80" src="https://images.ctfassets.net/cdy7uua7fh8z/3sf7RRsy81bt3zcXMnHUSe/2171fdab4ffeb0987c329aa897038abc/rt-and-at.png" alt="" />
                <div className="mt-8">
                    <span className="text-blue-500 uppercase">Refresh and Access Token</span>
                    <h1 className="mt-4 text-xl font-semibold text-gray-800 dark:text-white">In web applications, especially those using technologies like React, Vue.js, or Angular, you often need to handle authentication and access tokens to secure your API requests</h1>
                    <p className="mt-2 text-gray-500 dark:text-gray-400">refreshToken() sends a request to the server to refresh the access token using the refresh token.
requestWithTokenRefresh() is a wrapper function around Axios that automatically retries the request with a new access token if the original request returns a 401 Unauthorized status code.
This is a basic implementation and may need adjustments based on your specific authentication flow and server setup. Additionally, ensure that your server-side logic for token refresh and validation is secure and follows best practices.</p>
                   
                </div>
            </div>
        </div>
    </div>
</section>

        </div>
    );
};

export default Blog;