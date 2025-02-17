import { component$, Slot } from '@builder.io/qwik';

export default component$(({ id, value, placeholder, onInput$, className, big }: any) => {
  return (
    <div class="flex flex-col">
      <label for={id} class="mb-2">
        <Slot />
      </label>
      {big ?
        <RawTextAreaInput id={id} value={value} placeholder={placeholder} onInput$={onInput$} className={`mb-3 ${className}`} /> :
        <RawTextInput id={id} value={value} placeholder={placeholder} onInput$={onInput$} className={`mb-3 ${className}`} />
      }
    </div>
  );
});

export const RawTextInput = component$(({ id, value, placeholder, onInput$, className }: any) => {
  return (
    <input class={`transition ease-in-out text-lg bg-gray-800 text-gray-50 hover:bg-gray-700 focus:bg-gray-700 rounded-md px-3 py-2 ${className}`} id={id} value={value} placeholder={placeholder} onInput$={onInput$}/>
  );
});

export const RawTextAreaInput = component$(({ id, value, placeholder, onInput$, className }: any) => {
  return (
    <textarea class={`transition ease-in-out text-lg bg-gray-800 text-gray-50 hover:bg-gray-700 focus:bg-gray-700 rounded-md px-3 py-2 resize-y w-full h-32 ${className}`} id={id} value={value} placeholder={placeholder} onInput$={onInput$}/>
  );
});