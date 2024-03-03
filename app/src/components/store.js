//  A simple state-management solution. Pinia could also be used,
//  but this project is relatively simple. Still, prop drilling on it's own is annoying.

import { reactive, ref } from "vue";

// ----- General -----

// This object would likely be loaded from a database or come from some form of login and authentication.
// For this project, I have chosen to allow 2 views to showcase possible utilization of the tickets object.
// When on the 'Admin' screen, the username is irrelevant, but on the 'User' screen, it is added to new tickets,
// so that Help Desk personnel can see who is having trouble.
export const user = reactive({
  userName: "Doe",
  userMode: "user",
  changeMode(newMode) {
    this.userMode = newMode;
  },
});

//  ----- Tickets -----

// An object for the full list of tickets.
// In a more realistic scenario, the tickets array would likely require a method for requesting the data from a database.
export const tickets = reactive({
  total: 0,
  data: [],
  addTicket(ticket) {
    this.data.push(JSON.parse(JSON.stringify(ticket.data)));
    this.total++;
  },
  removeTicket(index) {
    if (index < this.data.length && index > -1) {
      this.data.splice(index, 1);
      this.total--;
    }
  },
});

//  ----- Form -----

const emptyTicket = {
  category: "",
  type: "",
  subject: "",
  description: "",
  docs: [],
  time: 0,
  user: "",
};

// This ticket object is used extensively within the form.
// data is the currently used ticket
// fileCount is used to modify the file names when generated
// clear() empties the ticket
// addFile() adds a new feaux file to the docs list
// deleteFile() removes a file from the list using an index
export const ticket = reactive({
  data: {
    category: "",
    type: "",
    subject: "",
    description: "",
    docs: [],
    time: 0,
    user: "",
  },
  fileCount: 0,
  clear() {
    this.data = JSON.parse(JSON.stringify(emptyTicket));
  },
  time() {
    this.data.time = Date.now();
  },
  user(name) {
    this.data.user = name;
  },
  addFile() {
    this.data.docs.push(
      "nameoffileattached" +
        (this.fileCount == 0 ? "" : this.fileCount) +
        ".ext"
    );
    this.fileCount++;
  },
  deleteFile(index) {
    this.data.docs.splice(index, 1);
  },
});

// Used to provide visual feedback to validation. 'false' means no error.
// export const errors = reactive({
//   category: false,
//   type: false,
//   subject: false,
//   description: false,
// });

// An object of arrays, to help present only relevant 'types' in the form.
// Note: I have added 'Other' to the final list for the sake of consistency.
export const categories = reactive({
  Hardware: [
    "Laptop",
    "Mobile",
    "Peripherals",
    "Desk Phone",
    "Printers",
    "Other",
  ],
  Software: [
    "Teams/Zoom",
    "Mobile Blackberry",
    "Adobe",
    "Outlook",
    "Microsoft Office",
    "Other",
  ],
  Network: ["Network Access", "Connectivity", "VPN", "Drivers", "Other"],
  "In-Processing": [
    "Access Badge",
    "Common Access Card (CAC)",
    "SIPR",
    "Trello",
    "Other",
  ],
});
