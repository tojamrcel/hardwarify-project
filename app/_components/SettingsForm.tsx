function SettingsForm({ email }: { email: string }) {
  return (
    <div className="flex items-center gap-2">
      <input
        type="email"
        className="text-md h-10 w-2/3 rounded-md p-2 text-center text-gray-400 shadow-sm outline-none transition-all duration-200"
        value={email}
        readOnly
      />
    </div>
  );
}

export default SettingsForm;
