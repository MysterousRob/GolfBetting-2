import { useState } from "react";

function MyForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch("/submit-form", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log("Form Submitted Successfully");
      } else {
        console.log("Form Submission Failed");
      }
    } catch (error) {
      console.log("Network ERROR", error);
    }

    console.log(formData);
  };

  return (
    <div className="bg-black h-15 text-white flex justify-center items-center gap-1.5 font-oswald w-screen m-0 p-">
      <h1>Get In Contact</h1>
      <form
        action="mailto:robertjohngasior@gmail.com"
        method="post"
        onSubmit={handleSubmit}
      >
        <div className="p-2 bg-black text-white font-bold text-base flex flex-col space-y-2">
          {/* Name Field */}
          <div className="flex items-center border border-black rounded-sm text-white min-w-[50px] p-2">
            <label htmlFor="name" className="mr-2">
              Name:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="bg-white text-black p-2"
            />
          </div>

          {/* Email Field */}
          <div className="flex items-center border border-black rounded-sm text-white min-w-[50px] p-2">
            <label htmlFor="email" className="mr-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="bg-white text-black p-2"
            />
          </div>

          {/* Message Field */}
          <div className="flex items-center border border-black rounded-sm text-white min-w-[50px] p-2">
            <label htmlFor="message" className="mr-2">
              Message:
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="bg-white text-black p-2"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center mt-2">
            <button
              type="submit"
              className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}
export default MyForm;
