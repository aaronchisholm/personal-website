import React from 'react';
import BlogPostView from '../BlogPostView/BlogPostView';
import { useState } from 'react';
import ProjectList from '../ProjectList/ProjectList';
import { Box } from '@mui/material';
//import findBlogPosts from '../../services/blog/blog-service';

const Blog= ({posts = []}) => {

    const blogPosts = [
        {
            title : 'A Year as a Barista: Transferring Skills from java to JavaScript',
            date : '8/8/24',
            imageSrc : '',
            body: ['This is a description of a sample project!']
        },

        {
            title : 'Building this Website: Four Techniques to Overcome Procrastination',
            date : '8/8/24',
            imageSrc : 'https://c02.purpledshub.com/uploads/sites/41/2021/05/procrastination-office-12be4cc.jpg?webp=1&w=1200',
            body: [
                'Believe it or not, this website took me a long time to make.',
                'When I started working on this site, I was excited to have a centralized place to share all the work I have done so far. I was excited to design and implement each piece of it, to make it my own, as well as help guide me in my future project.',
                'But before long, working on new features or producing content to include here became a chore, something I dreaded. I became a serial procrastinator on my own project, and as I continued with classes, my job search, and my part-time cafe gig, it became easier than ever to come up with reasons why I should do something else instead.',
                'So now I\'ll share four techniques I have used to overcome my procrastination so you don\'t have to waste time like I did.',
                '1) Procrastinate Productively.',
                'Of course this seems counterintuitive. I just told you I would help you stop procrastinating, and now I\'m just telling you to do it more?',
                'What I mean here is simple: IF you are going to procrastinate, you might as well do it with tasks that you have to complete anyways.',
                'When you feel a strong urge to procrastinate, think of it as replacing the task in front of you with something else on your agenda. I recommend choosing small, discrete-length tasks that need to get done regardless. Some good examples of this are folding laundry, picking up groceries, cleaning the house, or working on your personal budget or finances. If you have another project in progress, working on that is also acceptable.',
                'By doing something productive even when you procrastinate, you maintain your flow as a productive person and get yourself into the right state of mind to continue doing work. You also complete other tasks that you might have also spent time procrastinating on -- there might be a reason why you still hadn\'t folded your clean laundry.',
                '2) Start Small.',
                'In his book Atomic Habits, James Clear describes this approach as "Making it Easy". In basic terms, if you think you want to procrastinate, just try doing the smallest easiest possible version of what you have to do.',
                'Research shows that it\'s easier to summon motivation for a minor task than it is for a major one. If you are concerned about your procrastination, don\'t start with the biggest and most complicated or arduous version of the problem. Instead, commit to taking the first step and go from there. You may find you\'ve built up some momentum. This step also works by breaking the project down into smaller pieces.',
                'Another advantage of starting small is that you can develop a better understanding of where you want the project to go, and how long it will take you to complete it. You also get a better sense of what the different tasks are that you need to take, meaning that you can start small again should you decide to take a break.',
                '3) Capitalize on Motivation and Momentum.',
                'If you suddenly find yourself anxious to work on a project you have been procrastinating on, jump in without thinking about it.',
                'Oftentimes, we say to ourselves that we will work on it after we finish what we are currently doing, or that we planned to do it later. While it seems smart to focus on the task at hand, all this really does is deny us of some of our best and most inspired output. A study published in the European Journal of Business and Management found that worker motivation has a significant positive correlation with productivity.',
                'On the flip side, if you are doing a task and come to a decision point, a place where it would make sense to pause your current work and focus on something else, or a time where you had planned to start something else, you should stick with the current task if you are enamored with it. Having the relevant subject matter on the forefront of your mind or being in a "flow state" with a specific task can hugely boost your productivity.',
                'A Harvard Business Review research report published in 2022 found that employees lose around five working weeks per year as a result of transition time when switching tasks and context, accounting for time needed to wind down from a current task, reorient themselves to a new context and recall relevant information.',
                'That is to say, needlessly switching tasks can cost you a LOT of productive output. But switching from a subjectively boring task to an exciting one can help yield incredible results.',
                '4) Just Do the Work.',
                'Sometimes, you need to listen to Nike. You won\'t always want to work on the tasks or projects that you need to, and while pushing yourself too hard can lead to burnout, sometimes the best thing you can do is just take care of it.',
                'Leaving a task unfinished for too long can become stressful and being stressed about a task will make you more likely to procrastinate. This feedback loop can prevent you from achieving your goals and completing your projects, and considering the effect of stress on your health, can even be dangerous.',
                'Remember: You have to start to finish. And until you have finished, the work you started isn\'t worth anything. So make use of these four techniques to not only overcome procrastination, but to complete your projects, deliver your best work, and achieve your goals.',
                'Godspeed everyone!'
            ]
        },

        {
            title : 'Next Project',
            date : '12/26/23',
            imageSrc: '',
            body: ['For my next project, I will create a vocab word generator using a dictionary API and potentially excluding from a list of the most common words.']   
        },

        {
            title : 'Other Projects',
            date : '1/1/24',
            imageSrc: '',
            body: ['Other projects may include: a chess game (either with matchmaking or AI), e-commerce, a functional calculator app, or a realtime collaborative word processor like google docs.']
        },
    ];

    var [selectedPost, setSelectedPost] = useState(blogPosts[0]);
    console.log(selectedPost.title);
    return (
        <div className='row container mx-5 py-4'>
            <h1 className=''> Blog </h1>
            <Box className='row border p-0'>
                <div className='col-3 h-100 p-0'>
                    <ProjectList projects={blogPosts} projectSelect={setSelectedPost}/>
                </div>
                <div className='col-9'>
                    <BlogPostView post={selectedPost}/>
                </div>
            </Box>
        </div>
    )
};

export default Blog;