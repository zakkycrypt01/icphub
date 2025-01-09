import {StatusCodes} from 'http-status-codes';
import axios from 'axios';
import Talent from '../models/talentDB.js';
import Company from '../models/companyDB.js';
import Bounty from '../models/bountyDB.js';
import submitbounty from '../models/submitbountyDB.js';
import event from '../models/eventDB.js';
import invitesDB from '../models/invitesDB.js';
import { log } from 'console';


class UserController{
    // create a new user as talent
    static async httpAddtalent(request, response){
        const {firstname, lastname, email, phonenum, telegram, twitter, PoF, role, telegramId} = request.body;
        const talent = await Talent.create({ firstname, lastname, email, phonenum, telegram, twitter, PoF, role, telegramId});
        const data = {
            firstname: talent.firstname,
            lastname: talent.lastname,
            email: talent.email,
            phonenum: talent.phonenum,
            telegram: talent.telegram,
            twitter: talent.twitter,
            PoF: talent.PoF,
            role: talent.role,
            telegramId: talent.telegramId,
        }
        response.status(StatusCodes.CREATED).json({
            data
        });
    }


    //get a talent
    static async httpGettalent(request, response){
        const talent = await
        Talent.findById(request.params.id);
        response.status(StatusCodes.OK).json(talent);
    }
    // create a new user as company
    static async httpAddcompany(request, response){
        const {companyname, contactname, email, phonenum, website, description, telegramId} = request.body;
        const company = await Company.create({ companyname, contactname, email, phonenum, website, description, telegramId});
        const data = {
            companyname: company.companyname,
            contactname: company.contactname,
            email: company.email,
            phonenum: company.phonenum,
            website: company.website,
            description: company.description,
            telegramId: company.telegramId,
        }
        response.status(StatusCodes.CREATED).json(data);
    }

    
    // post a bounty
    static async httpPostbounty(request, response){
        const {title, description, reward,deadline, skills, companyname, postedby} = request.body;
        const bounty = await Bounty.create({ title, description, reward, deadline, skills, companyname, postedby});
        const data = {
            title: bounty.title,
            description: bounty.description,
            reward: bounty.reward,
            deadline: bounty.deadline,
            skills: bounty.skills,
            companyname: bounty.companyname,
            postedby: bounty.postedby,
        }
        response.status(StatusCodes.CREATED).json(data);
    }

    //get all bounties
    static async httpGetbounties(request, response){
        const bounties = await Bounty.find();
        response.status(StatusCodes.OK).json(bounties);
    }

    //get a bounty
    static async httpGetbounty(request, response){
        const bounty = await Bounty.findById(request.params.id);
        response.status(StatusCodes.OK).json(bounty);
    }

    //get all userbounties
    static async httpGetuserbounties(request, response){
        const userbounties = await Userbounty.find();
        response.status(StatusCodes.OK).json(userbounties);
    }

    //get all talents
    static async httpGettalents(request, response){
        const talents = await Talent.find();
        response.status(StatusCodes.OK).json(talents);
    }

    //submit a bounty
    static async httpSubmitbounty(request, response){
        const {PoF, description, address, bounty_id, talent_id} = request.body;
        const Submitbounty = await submitbounty.create({ PoF, description, address, bounty_id, talent_id
        });
        const data = {
            PoF: Submitbounty.PoF,
            description: Submitbounty.description,
            address: Submitbounty.address,
            bounty_id: Submitbounty.bounty_id,
            talent_id: Submitbounty.talent_id,
        }
        response.status(StatusCodes.CREATED).json(data);
    }

    // post an event
    static async httpPostevent(request, response){
        const {eventTitle, eventDate, eventStartTime, eventEndTime, timezone, eventType, description, link} = request.body;
        const Event = await event.create({ eventTitle, eventDate, eventStartTime, eventEndTime, timezone, eventType, description, link});
        const data = {
            eventTitle: Event.eventTitle,
            eventDate: Event.eventDate,
            eventStartTime: Event.eventStartTime,
            eventEndTime: Event.eventEndTime,
            timezone: Event.timezone,
            eventType: Event.eventType,
            description: Event.description,
            link: Event.link,
        }
        response.status(StatusCodes.CREATED).json(data);
    }

    //get all events
    static async httpGetevents(request, response){
        const events = await event.find();
        response.status(StatusCodes.OK).json(events);
    }
    //store invites
    static async httpStoreinvites(request, response){
        const {referredId, referrerId, status} = request.body;
        const invites = await invitesDB.create({ referredId, referrerId, status});
        const data = {
            referredId: invites.referredId,
            referrerId: invites.referrerId,
            status: invites.status,
        }
        response.status(StatusCodes.CREATED).json(data);
    }
}


export default UserController;