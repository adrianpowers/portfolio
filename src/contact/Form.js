import React from "react";
import "../index.css";

export default function Form() {
  return (
    <div className="grid grid-cols-4 gap-4">
      <div className="col-start-2 mt-4">
        <h1 className="text-4xl font-bold text-right text-blue-900 dark:text-blue-300 drop-shadow-md my-4">
          Contact Me
        </h1>
        <p className="text-2xl text-right dark:text-blue-400">
          Please provide your first and last name, phone number, email,
          preferred method of contact, and a message to let me know why you're
          reaching out. You can expect a quick response, within 1-2 business
          days at the latest!
        </p>
      </div>
      <form
        className="flex flex-col justify-center grid gap-4 py-5"
        action="https://formsubmit.co/4d9bf7fdd98217b90541869285acd0e8"
        method="POST"
      >
        <input
          type="text"
          name="name"
          required="true"
          placeholder="Name"
          className="form-input py-2 rounded-sm bg-slate-100 text-blue-900"
        />
        <input
          type="tel"
          name="phone"
          required="true"
          placeholder="Phone Number"
          className="form-input py-2 rounded-sm bg-slate-100 text-blue-900"
        />
        <input
          type="email"
          name="email"
          required="true"
          placeholder="Email Address"
          className="form-input py-2 rounded-sm bg-slate-100 text-blue-900"
        />
        <textarea
          type="text"
          name="message"
          required="true"
          placeholder="Message"
          className="form-textarea rounded-sm bg-slate-100 text-blue-900"
        />

        <label htmlFor="contactMethod">
          <p className="text-slate-900 dark:text-blue-300 font-semibold text-lg text-center pt-2">
            Preferred Method of Contact:
          </p>
        </label>
        <select
          id="contactMethod"
          required="true"
          name="contactMethod"
          className="form-select p-2 rounded-sm bg-slate-100 text-blue-900"
        >
          <option value="">Select</option>
          <option value="callMe">Phone Call</option>
          <option value="textMe">Text</option>
          <option value="emailMe">Email</option>
        </select>

        <input
          type="submit"
          className="bg-gradient-to-br from-blue-600 to-slate-800 text-white rounded-sm p-3 
            hover:from-blue-500 hover:to-blue-500 active:from-blue-700 active:to-blue-700"
        />
      </form>
    </div>
  );
}
