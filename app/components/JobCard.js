import React from "react";
import { FaHeart, FaEdit, FaTrash } from "react-icons/fa";

const JobCard = ({ job, onEdit, onDelete, onClick }) => {
  return (
    <div
      className="relative bg-white shadow-md rounded-lg p-6 w-[310px] cursor-pointer"
      onClick={() => onClick(job)} 
    >
      <button className="absolute top-2 right-2 text-gray-400 hover:text-red-500">
        <FaHeart />
      </button>
      <h2 className="text-xl font-semibold text-gray-800">{job.title}</h2>
      <p className="text-gray-600">{job.company}</p>
      <p className="text-gray-500">{job.location}</p>

      <div className="flex justify-between mt-4">
        <button
          onClick={(e) => {
            e.stopPropagation();
            onEdit();
          }}
          className="flex items-center space-x-2 text-blue-500 hover:text-blue-700"
        >
          <FaEdit />
          <span>Edit</span>
        </button>
        <button
          onClick={(e) => {
            e.stopPropagation();
            onDelete();
          }}
          className="flex items-center space-x-2 text-red-500 hover:text-red-700"
        >
          <FaTrash />
          <span>Delete</span>
        </button>
      </div>
    </div>
  );
};

export default JobCard;
