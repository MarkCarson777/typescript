"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LinkedList = void 0;
const Sorter_1 = require("./Sorter");
class Node {
    constructor(data) {
        this.data = data;
        this.next = null;
    }
}
class LinkedList extends Sorter_1.Sorter {
    constructor() {
        super(...arguments);
        this.head = null;
    }
    // Add a new node to the end of the list
    add(data) {
        // Create a new node
        const newNode = new Node(data);
        // If the list is empty, set the new node as the head
        if (!this.head) {
            this.head = newNode;
            return;
        }
        // Start from the head
        let current = this.head;
        // Traverse to the end of the list
        while (current.next) {
            current = current.next;
        }
        // Set the next of the last node to the new node
        current.next = newNode;
    }
    // Get the length of the list
    get length() {
        // If the list is empty, return 0
        if (!this.head) {
            return 0;
        }
        // Start from the head and count the nodes
        let length = 1;
        let node = this.head;
        // Traverse the list and count the nodes
        while (node.next) {
            length++;
            node = node.next;
        }
        // Return the total count
        return length;
    }
    // Get the node at a specific index
    at(index) {
        // Check if the index is out of bounds
        if (!this.head) {
            throw new Error("Index out of bounds");
        }
        // If the index is 0, return the head
        let counter = 0;
        let node = this.head;
        // Traverse the list until the index is reached
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        // If the index is out of bounds, throw an error
        throw new Error("Index out of bounds");
    }
    // Compare two nodes at specific indices
    compare(leftIndex, rightIndex) {
        // Check if the indices are valid
        if (!this.head) {
            throw new Error("List is empty");
        }
        // Check if the indices are out of bounds
        return this.at(leftIndex).data > this.at(rightIndex).data;
    }
    // Swap two nodes at specific indices
    swap(leftIndex, rightIndex) {
        // Assign the nodes at the specified indices to variables
        const leftNode = this.at(leftIndex);
        const rightNode = this.at(rightIndex);
        // Swap the data of the two nodes
        const leftHand = leftNode.data;
        leftNode.data = rightNode.data;
        rightNode.data = leftHand;
    }
    // Print the data of each node in the list
    print() {
        // If there is no head, return
        if (!this.head) {
            return;
        }
        // Start from the head and print the data of each node
        let node = this.head;
        // Traverse the list and print the data of each node
        while (node) {
            console.log(node.data);
            node = node.next;
        }
    }
}
exports.LinkedList = LinkedList;
