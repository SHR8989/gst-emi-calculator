export default function Contact() {
  return (
    <div className="max-w-full min-h-screen px-6 py-12 text-gray-800 dark:text-gray-200">
      {/* Heading */}
      <h1 className="text-3xl font-bold text-center mb-8 text-purple-600 ">
        Contact <span className="text-gray-400">Us</span>
      </h1>

      {/* Intro */}
      <p className="text-center mb-10 text-lg  animate-fadeIn [animation-delay:0.2s]">
        Have questions, feedback, or suggestions? We’d love to hear from you!
        Fill out the form below or reach us directly.
      </p>

      {/* Contact Form */}
      <form className=" md:w-[50%] mx-auto bg- shadow-lg rounded-2xl p-8 space-y-6 ">
        <div>
          <label className="block mb-2 font-medium">Name</label>
          <input
            type="text"
            placeholder="Your name"
            className="w-full px-4 py-2 placeholder-gray-800 dark:placeholder-white border rounded-lg text-white bg-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium ">Email</label>
          <input
            type="email"
            placeholder="Your email"
            className="w-full px-4 py-2 placeholder-gray-800 dark:placeholder-white border rounded-lg text-white bg-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <div>
          <label className="block mb-2 font-medium ">Message</label>
          <textarea
            rows="5"
            placeholder="Write your message..."
            className="w-full px-4 py-2 placeholder-gray-800 dark:placeholder-white border rounded-lg text-white bg-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-purple-600 text-white font-semibold py-3 rounded-lg shadow-md hover:bg-purple-700 transition duration-300"
        >
          Send Message
        </button>
      </form>

      {/* Extra Info */}
      {/* <div className="mt-10 bg-black text-center animate-fadeIn [animation-delay:0.6s]">
        <p className="text-gray-400">
          You can also reach us via email at{" "}
          <span className="font-semibold text-purple-600">support@charcounter.com</span>
        </p>
      </div> */}
    </div>
  );
}
