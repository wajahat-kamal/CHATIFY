import React from "react";

function Message({ message }) {
  return (
    <div>
      {message.role === "user" ? (
        <div className="flex items-start justify-end my-4 gap-2">
          <div class="flex flex-col gap-2 p-2 px-4 bg-slate-50 dark:bg-[#57317C]/30 border border-[#80609F]/30 rounded-md max-w-2xl">
            <p class="text-sm dark:text-primary">{message.content}</p>
            <span class="text-xs text-gray-400 dark:text-[#B1A6C0]">
              {message.timstamp}
            </span>
          </div>
          <div className="bg-gray-200 dark:bg-purple-600 rounded-full p-1.5">
            <User size={18} className="text-gray-700 dark:text-gray-100" />
          </div>
        </div>
      ) : (
        <div class="inline-flex flex-col gap-2 p-2 px-4 max-w-2xl bg-primary/20 dark:bg-[#57317C]/30 border border-[#80609F]/30 rounded-md my-4">
         <div className="text-sm dark:text-primary reset-tw">{message.content}</div>
         <p class="text-xs text-gray-400 dark:text-[#B1A6C0]">
              {message.timstamp}
            </p>
        </div>
      )}
    </div>
  );
}

export default Message;
