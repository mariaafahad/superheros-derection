import React, { useEffect, useState } from 'react';
import Developer from '../Developer/Developer';
import Total from '../Total-cost/Total';

const Page = () => {

    const [devs, setDevs] = useState([]);
    // total

    const [total, setTotal] = useState([]);

    const handleCount = (dev) => {
        const newTotal = [...total, dev]

        setTotal(newTotal);
        console.log(dev);
    }

    useEffect(() => {
        fetch('./package.JSON')
            .then(res => res.json())
            .then(data => setDevs(data))
    }, [])

    return (
        <div className="w-100">
            <div className="row">
                <div className="col-md-10">

                    <div className="row">


                        {
                            devs.map((dev, i) => <React.Fragment key={i}>
                                <div className="col-md-4">
                                    <Developer
                                        dev={dev}

                                        handleCount={handleCount}
                                    />
                                </div>

                            </React.Fragment>)
                        }

                    </div>


                </div>
                <div className="col-md-2" style={{ padding: "0" }}>
                    {/* total */}
                    <Total total={total} />
                </div>
            </div>
        </div>
    );
};

export default Page;