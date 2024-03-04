//  A simple state-management solution. Pinia could also be used,
//  but this project is relatively simple.

import { reactive, ref } from "vue";

// ----- General -----

// This object would likely be loaded from a database or be replaced by some form of login and authentication.
// You can currently change mode using the navbar, which is just for fun.
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
// - data is the current list of tickets.
// - addTicket(ticket) takes a ticket object and adds the data to the list of tickets.
// - removeTicket(index) removes a ticket from the list.
export const tickets = reactive({
  data: [],
  addTicket(ticket) {
    this.data.push(JSON.parse(JSON.stringify(ticket.data)));
  },
  removeTicket(index) {
    if (index < this.data.length && index > -1) {
      this.data.splice(index, 1);
    }
  },
});

//  ----- Form -----

const emptyTicket = {
  category: "",
  types: [],
  subject: "",
  description: "",
  docs: [],
};

// This ticket object is used extensively within the form.
// - data contains the currently-used ticket
// - fileCount is used to modify the file names when generated
// - clear() empties the ticket by replacing it with a clone of the above emptyTicket object, and resets the file count.
// - addType(value) adds a type from the dropdown to the list of types, if it is not present already
// - deleteType(index) removes a type
// - addFile() adds a new feaux file to the docs list
// - deleteFile() removes a file from the list using an index
export const ticket = reactive({
  data: {
    category: "",
    types: [],
    subject: "",
    description: "",
    docs: [],
  },
  fileCount: 0,
  clear() {
    this.fileCount = 0;
    this.data = JSON.parse(JSON.stringify(emptyTicket));
  },
  addType(value) {
    if (!this.data.types.includes(value)) {
      this.data.types.push(value);
    }
  },
  deleteType(index) {
    this.data.types.splice(index, 1);
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

// An object of arrays, to help present only relevant categories and types in the form.
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
