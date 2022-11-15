import React from 'react';
import { Route } from 'react-router';

export default (
    <Route>
        <Route path="/"/>
        <Route path='/welcome'/>
        <Route path="/book/:id"/>
        <Route path="/catalog"/>
        <Route path="/yourbooks" />
        <Route path="/events" />
        <Route path="/about"/>
        <Route path="/contact"/>
        <Route path="/cart"/>
        <Route path="/login"/>
        <Route path='/reset-password/:passwordResetCode'/>
        <Route path='/verify-email/:verificationString'/>
        <Route path='/please-verify'/>
        <Route path="/signup"/>
        <Route path='/forgot-password'/>
    </Route>
);