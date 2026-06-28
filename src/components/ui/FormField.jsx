"use client";

export default function FormField({
  label,
  name,
  type = "text",
  error,
  className = "",
  textarea = false,
  children,
  ...props
}) {
  const id = name;
  const inputClasses = `w-full input rounded-xl bg-base-100 border border-base-content/15 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-colors ${
    error ? "input-error border-error/40" : ""
  }`;
  const textareaClasses = `w-full textarea rounded-xl bg-base-100 border border-base-content/15 focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/40 transition-colors ${
    error ? "textarea-error border-error/40" : ""
  }`;

  return (
    <div className={`flex flex-col gap-1.5 ${className}`}>
      {label && (
        <label htmlFor={id} className="text-sm font-medium text-base-content/80">
          {label}
        </label>
      )}
      {children ? (
        children
      ) : textarea ? (
        <textarea id={id} name={name} className={textareaClasses} {...props} />
      ) : (
        <input
          id={id}
          name={name}
          type={type}
          className={inputClasses}
          {...props}
        />
      )}
      {error && <p className="text-xs text-error mt-0.5">{error}</p>}
    </div>
  );
}
