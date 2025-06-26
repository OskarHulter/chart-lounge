import ExamplePopover from '@/components/popover/example-popover';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <body>
      <div className="root">
        {children}
        <ExamplePopover />
      </div>
    </body>
  );
}
