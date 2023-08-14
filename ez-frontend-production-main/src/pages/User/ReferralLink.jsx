import React, { useEffect } from 'react';
import { toast } from 'react-hot-toast';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const ReferralLink = () => {
    const { isAutheticated } = useSelector(state => state.user);
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAutheticated) {
            toast.success("You need to login first!");
            navigate("/user/login");
        }
    }, [isAutheticated, navigate]);

    return (
        <div>ReferralLink</div>
    )
}

export default ReferralLink