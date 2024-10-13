import Header from '@/components/Header';
type Props = {
    children: React.ReactNode;
};

const Layout: React.FC<Props> = ({ children }): JSX.Element => {
    return (
        <div className="tw-h-screen tw-max-h-screen tw-w-screen tw-bg-zinc-200 dark:tw-bg-zinc-700">
            <Header />
            <main>{children}</main>
        </div>
    );
};

export { Layout };
