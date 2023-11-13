import React, { useState } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";
import ReactGA from "react-ga";
import PopupModal from "../component/Contact/PopupModal";
ReactGA.initialize("G-R2Q7XQ6WBW");
ReactGA.pageview(window.location.pathname + window.location.search);

// Initialize Firebase app
const firebaseConfig = {
  // Your Firebase configuration
  apiKey: "AIzaSyBRkE1-3lQHUozb_-HUPuI9bGA7fNBdBjU",
  authDomain: "sumansourabh-c2d6a.firebaseapp.com",
  projectId: "sumansourabh-c2d6a",
  storageBucket: "sumansourabh-c2d6a.appspot.com",
  messagingSenderId: "199578535552",
  appId: "1:199578535552:web:79d6b232a8dced3e6fc865",
  measurementId: "G-9RLEFPMZE5",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [newsletter, setNewsletter] = useState(false);
  const [selectedOption, setSelectedOption] = useState("UI/UX");
  const [isMessageSent, setIsMessageSent] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const docRef = await addDoc(collection(db, "contacts"), {
        firstName,
        lastName,
        email,
        message,
        newsletter,
        selectedOption,
      });
      console.log("Document written with ID: ", docRef.id);

      setFirstName("");
      setLastName("");
      setEmail("");
      setMessage("");
      setNewsletter(false);
      setSelectedOption("UI/UX");

      setIsMessageSent(true);
    } catch (error) {
      console.error("Error adding document: ", error);
    }
  };

  const handlePopupClose = () => {
    setIsMessageSent(false);
  };

  return (
    <div>
      <Navbar />
      <div className="bodymargin dark:text-gray-100 pt-20">
        <section className="text-[#033d35] -z-10 relative">
          <div
            className="lg:h-80 md:h-56 sm:h-48 hero-image bg-right-bottom bg-cover flex"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1493934558415-9d19f0b2b4d2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=854&q=80)",
            }}
          >
            <p className="relative container mx-auto p-4 flex items-center justify-center z-10 text-4xl md:text-7xl font-bold suman">
              Get In Touch
            </p>
          </div>
        </section>
      </div>
      <div className="max-w-screen-md mx-auto md:p-5 pt-20">
        <form className="w-full" onSubmit={handleSubmit}>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-first-name"
              >
                First Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                id="grid-first-name"
                type="text"
                placeholder="Mark"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
              <p className="text-red-500 text-xs italic">
                Please fill out this field.
              </p>
            </div>
            <div className="w-full md:w-1/2 px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-last-name"
              >
                Last Name
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-last-name"
                type="text"
                placeholder="Doe"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-email"
              >
                *Email Address
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-email"
                type="email"
                placeholder="********@*****.**"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
          </div>
          <div className="col-span-6 sm:col-span-3">
            <label
              htmlFor="country"
              className="block text-sm font-medium text-gray-700"
            >
              *Domain
            </label>
            <select
              id="country"
              name="country"
              autoComplete="country"
              className="block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="UI/UX">Select</option>
              <option value="UI/UX">UI/UX</option>
              <option value="UI/UX">Hire</option>
              <option value="Website Design">Website Design</option>
              <option value="Website Development">Website Development</option>
              <option value="Graphic Design">Graphic Design</option>
              <option value="Events">Events</option>
              <option value="Events">Others</option>
            </select>
          </div>

          <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full px-3">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-message"
              >
                *Message
              </label>
              <textarea
                className="resize-none appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-message"
                rows="8"
                placeholder="Write your message here..."
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-wrap -mx-3 mb-6">
              <div className="w-full px-3">
                <label className="inline-flex items-center">
                  <input
                    type="checkbox"
                    className="form-checkbox h-5 w-5 text-gray-600"
                    checked={newsletter}
                    onChange={(e) => setNewsletter(e.target.checked)}
                  />
                  <span className="ml-2 text-gray-700">
                    Get newsletter
                  </span>
                </label>
              </div>
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                <button className="buttonsmalldark" type="submit">
                  Submit
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
      {isMessageSent && (
        <PopupModal onClose={handlePopupClose}>
          <h2 className="text-xl font-bold mb-4">Thank you!</h2>
          <p>Your message has been sent successfully.</p>
        </PopupModal>
      )}
      <Footer />
    </div>
  );
};

export default Contact;
