type DetailProductPageProps = { params : {slug : string}};

export default async function DetailProductPage(props: DetailProductPageProps) {
    let { params } = props;
    params = await params;

    return (
        <div>
            <h1>Detail ProductPage</h1>
            {params.slug && <h2>{params.slug}</h2>}
            {/* <h2>{params.slug}</h2> */}
        </div>
    );
}